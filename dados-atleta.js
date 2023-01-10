class Atleta{
    constructor(nome, idade, peso, altura, notas){
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
  
    calcularCategoria(){
      if(this.idade >= 9 && this.idade <= 11){
        return "Infantil"
      }else if(this.idade >=12 && this.idade <= 13){
        return "Juvenil"
      }else if(this.idade >=14 && this.idade <= 15){
        return "Intermediário"
      }else if (this.idade >=16 && this.idade <= 30){
        return "Adultos"
      }else {
        return "Sem categoria"
      }
    }
  
    calcularIMC(){
      return this.peso / (this.altura*this.altura)
    }
  
    calcularMediaValida(){
      let soma = 0
      this.notas.forEach(function(nota){
        soma = soma + nota
      })
      return soma / this.notas.length
    }
  
    obtemNomeAtleta(){
      return this.nome
    }
  
    obtemIdadeAtleta(){
      return this.idade
    }
  
    obtemPesoAtleta(){
      return this.peso
    }
  
    obtemNotasAtleta(){
      return this.notas
    }
  
    obtemCategoria(){
      return this.calcularCategoria()
    }
  
    obtemIMC(){
      return this.calcularIMC()
    }
  
    obtemMediaValida(){
      return this.calcularMediaValida()
    }
  
    obtemAlturaAtleta(){
      return this.altura
    }
  }   
  
  let atleta = new Atleta("Cesar Abascal", 30, 80, 1.7, [10,9.34,8.42,10,7.88], "Adulto", 27.68166089965398, 8.766666666666666);
   
  console.log(`Nome: ${atleta.obtemNomeAtleta()}
  Idade: ${atleta.obtemIdadeAtleta()}
  Peso: ${atleta.obtemPesoAtleta()}
  Altura: ${atleta.obtemAlturaAtleta()}
  Notas: ${atleta.obtemNotasAtleta()}
  Categoria: ${atleta.obtemCategoria()}
  IMC: ${atleta.obtemIMC()}
  Média Válida: ${atleta.obtemMediaValida()}`)
  
  
  
  
  
    
    
  
  