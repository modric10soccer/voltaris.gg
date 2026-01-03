"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  username: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string, rememberMe?: boolean) => Promise<boolean>
  signup: (username: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  updateUser: (updates: Partial<User>) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, rememberMe = false): Promise<boolean> => {
    const storedUsers = localStorage.getItem("registeredUsers")
    const users = storedUsers ? JSON.parse(storedUsers) : []

    const foundUser = users.find((u: any) => u.email === email && u.password === password)

    if (!foundUser) {
      throw new Error("Invalid email or password. Please sign up first.")
    }

    const mockUser: User = {
      id: foundUser.id,
      username: foundUser.username,
      email: foundUser.email,
    }

    localStorage.setItem("user", JSON.stringify(mockUser))
    setUser(mockUser)
    return true
  }

  const signup = async (username: string, email: string, password: string): Promise<boolean> => {
    const storedUsers = localStorage.getItem("registeredUsers")
    const users = storedUsers ? JSON.parse(storedUsers) : []

    // Check if email already exists
    if (users.some((u: any) => u.email === email)) {
      throw new Error("Email already registered")
    }

    const mockUser: User = {
      id: Math.random().toString(36).substring(7),
      username,
      email,
    }

    users.push({ ...mockUser, password })
    localStorage.setItem("registeredUsers", JSON.stringify(users))
    localStorage.setItem("user", JSON.stringify(mockUser))
    setUser(mockUser)
    return true
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  const updateUser = (updates: Partial<User>) => {
    if (!user) return

    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem("user", JSON.stringify(updatedUser))

    // Also update in registered users
    const storedUsers = localStorage.getItem("registeredUsers")
    if (storedUsers) {
      const users = JSON.parse(storedUsers)
      const index = users.findIndex((u: any) => u.id === user.id)
      if (index !== -1) {
        users[index] = { ...users[index], ...updates }
        localStorage.setItem("registeredUsers", JSON.stringify(users))
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
