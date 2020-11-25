const Database = require('./db')

const saveOrfanato = require('./saveOrfanato')
Database.then(async db => {
    

    // inserir dados na tabela
  /*  await saveOrfanato(db, {        
        lat: "-19.019613",
        lng: "-57.632585",
        name: "Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que encontram-se em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9922993",
        images: ["https://images.unsplash.com/photo-1572247324584-a841c32b95ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1600712242868-18d4e92fb599?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e pacência para dar",
        opening_hours: "Horário de visitas das 8h até 18h",
        open_on_weekends: "1"

    })*/

    // consultar dados da tabela
    // const selectedOrfanatos = await db.all("SELECT * FROM orfanatos")
    // console.log(selectedOrfanatos)
    
    // consultar somente 1 orfanato, pelo id
    // const orfanato = await db.all("SELECT * FROM orfanatos WHERE id = 3")
    // console.log(orfanato)

    //deletar dado na tabela
    // await db.run("DELETE FROM orfanatos id = 4 ")
})