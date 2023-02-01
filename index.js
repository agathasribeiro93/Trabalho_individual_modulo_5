import inquirer from 'inquirer'
import chalk from 'chalk'



let css_array = ["border", "background-color", "border-radius"]

lista_CSS()

function lista_CSS() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'O que você deseja fazer?',
          choices: [
            'Exibir lista CSS',
            'Adicionar item CSS',
            'Remover item CSS',
            'Sair',
          ],
        },
      ])
      .then((answer) => {
        let action = answer['action']
  
        if (action === 'Exibir lista CSS') {
            mostra_lista()
        } else if (action === 'Adicionar item CSS') {
            inserir_item()
        } else if (action === 'Remover item CSS') {
            remover_item()
        } else if (action === 'Sair') {
            console.log('Sair')
            sair()
           
        }
      })
  }

  


  function mostra_lista(){
    console.log("lista CSS:", css_array.sort())
    voltar()

  }


  function inserir_item() {
    inquirer
      .prompt([
        {
          name: 'insert',
          message: 'Digite uma propriedade CSS:',
        },
      ])
      .then((answer) => {
        let resposta_CSS = answer['insert']
  
        if (!css_array.includes(resposta_CSS)) {
          css_array.push(resposta_CSS)
          console.log(chalk.green('Propriedade CSS inserida com sucesso!!!'))
          console.log("lista CSS:", css_array.sort())
          return voltar()
        }
        else{
          console.log(chalk.bgRed.black('Esta propriedade já foi adicionada. Escolha outra!'))
          inserir_iten()
        }
      })
  }


  function remover_item(){
    inquirer
      .prompt([
        {
          name: 'remove',
          message: 'Digite uma propriedade CSS a ser removida:',
        },
      ])
      .then((answer) => {
        let removeCSS = answer['remove']
      
        if (css_array.includes(removeCSS)) {
          let findFor = removeCSS
          let index = css_array.indexOf(findFor);
          while(index >= 0){
            css_array.splice(index, 1);
            index = css_array.indexOf(findFor);}

          console.log(chalk.bgGreen.black('Propriedade CSS removida com sucesso!!!'))
          console.log("lista CSS:", css_array.sort())
          return voltar()
        }
        else {
          console.log(chalk.bgRed.black('Esta propriedade já foi removida. Escolha outra!'))
          console.log("lista CSS:", css_array.sort())
          return voltar()
        }
      })
   }

   function voltar(){
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'back',
          message: 'Deseja voltar ao Menu Inicial?',
          choices: [
            'Sim',
            'Não',
          ],
        },
      ])
      .then((answer) => {
        let voltar = answer['back']
  
        if (voltar === 'Sim') {
            lista_CSS()
        } else if (voltar === 'Não') {
            console.log('Sair')
            sair()   
        }
      })
  }
 
  function sair(){
    console.log("lista CSS:", css_array.sort())
    console.log(chalk.bgMagenta.black('FIM !!!'))
    process.exit()

  }