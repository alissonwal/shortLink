//Busca links salvos
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || []

  return linksSaves
}

//Salva um link no loca storage
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key)

  const hasLink = linksStored.some(link => link.id === newLink.id)

  if (hasLink) {
    console.log('esse link ja existe na lista')
    return
  }

  linksStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linksStored))
  console.log('link salvo')
}

//Exclue um link salvo
export function deleteLink(Links, id) {
  let myLinks = Links.filter(item => {
    return item.id !== id
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
  console.log('Link deletado')

  return myLinks
}
