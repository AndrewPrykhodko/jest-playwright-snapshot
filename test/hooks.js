// open page by url generic hook
exports.open = async url => {
    await global.__PAGE__.goto(`${global.__URL__}${url}`)
}
