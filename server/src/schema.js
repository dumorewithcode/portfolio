export default `
type Icon {
  name: String
  url: String
  link: String
}

type Query {
  icons: [Icon]
}

`;
