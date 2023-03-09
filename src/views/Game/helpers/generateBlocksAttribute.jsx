export default (count) => {
  const blocks = []
  for (let i = 1; i <= count; i++) {
    blocks.push({ attemp: i, text: '' })
  }
  return blocks
}