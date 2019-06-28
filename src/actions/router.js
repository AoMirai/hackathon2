export const router = (url) => {
  console.log('router action')
  return {
  type: 'CHANGE_ROUTE',
  route: url,
};}