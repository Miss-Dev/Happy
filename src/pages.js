const Database = require('./database/db')
const saveOrfanato = require('./database/saveOrfanato')

module.exports = {
    index(req, res){       
        return res.render('index')
    },
    async orfanato(req, res){
        const id = req.query.id
        try{
            const db = await Database;
            const results = await db.all(`SELECT * FROM orfanatos WHERE id = "${id}"`)
            const orfanato = results[0]

            orfanato.images = orfanato.images.split(",")
            orfanato.firstImage = orfanato.images[0]
            if(orfanato.open_on_weekends == "0"){
                orfanato.open_on_weekends = false                
            }else{
                orfanato.open_on_weekends = true
            }

            return res.render('orfanato', {orfanato})


        }catch(error){
                console.log(error)
                return res.send('Erro no banco de dados')
        }
    },
    async orfanatos(req, res){
        try{
            const db = await Database
            const orfanatos = await db.all("SELECT * FROM orfanatos")
            return res.render('orfanatos', {orfanatos})

        }catch(error){
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
        
    },

    criarOrfanato(req, res){
        return res.render('criar-orfanato')
    }, 

    async saveOrfanato(req, res){
        const fields = req.body

        // validar se os campos foram preenchidos
        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos')
        }
        try{ 
            // salvar um orfanato
            const db = await Database
            await saveOrfanato(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,

             })
            //  redirecionamento
            return res.redirect('/orfanatos')

        }catch(error){
            console.log(error)
            return res.send('Erro no banco de dados')
        }
       
    }
}