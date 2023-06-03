import menu from '../../../../data/menu.json'
const DesktopMenu = () => {
  const { header: headerMenu } = menu

  console.log("Header Menu: ", headerMenu)
  return (
    <div>Desktop</div>
  )
}

export default DesktopMenu