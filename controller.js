module.exports = {
    getPlanes: (req,res,next) => {
        const dbInstace = req.app.get('db')
        dbInstace.get_planes([25])
        .then(planes => {
            res.status(200).send(planes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}