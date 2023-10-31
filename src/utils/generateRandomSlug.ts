const generateRandomSlug = (id: string) => {
  return id.split('-')[0].slice(0, 5)
}

const getCurrentOrigin = () => {
  return window.location.origin
}

export { generateRandomSlug, getCurrentOrigin }
