import React from "react";

export type Language = {
  id: number
  type: string
  name: string
  level: string
  description: string
  loving: boolean
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