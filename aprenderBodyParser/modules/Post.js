import db from "./db.js"



const Post = db.sequelize.define("postagens2",{
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})


export default Post