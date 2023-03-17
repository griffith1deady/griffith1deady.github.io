import React from "react";

export type Language = {
  id: number
  type: string
  name: string
  level: number
  description: string
  stack: StackItem[]
}

export type SocialLink = {
  name: string
  url: string
  icon: React.ReactElement
  color: string
}

export type Project = {
  id: number
  title: string
  description: string
  ready: boolean
  progress: number
  href: string
  image: string
}

export type AboutCategory = {
  id: number
  name: string
}

export type AboutProperty = {
  id: number
  category: number
  value: string
}

export type Qualities = {
  value: string
}

export type StackItem = {
  name: string
  additional?: StackItem[]
}