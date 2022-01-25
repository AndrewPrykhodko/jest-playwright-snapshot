exports.execute = async element => {
    const style = await global.__PAGE__.$eval(element, el => {
        // getting css styles
        const compStyles = window.getComputedStyle(el)

        // returning object with styles to be verified in tests and element content
        return {
            color: compStyles.getPropertyValue('color'),
            size: compStyles.getPropertyValue('font-size'),
            font: compStyles.getPropertyValue('font-family'),
            text: el.textContent
        }
    })
    return style
}
