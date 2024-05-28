import path from 'path'

export const getFileName = (pathName: string) => {
  const fileName = path.basename(pathName)

  return fileName
}
