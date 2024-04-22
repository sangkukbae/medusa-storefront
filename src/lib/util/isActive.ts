export const isActive = (title: string, path: string) => {
  return path.includes(title.toLowerCase())
}
