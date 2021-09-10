import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({nome,email,address,phone,website,company,link}) => {

    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={'informações do Contato:'
                                                                      +'\nEmail: '+email
                                                                      +'\nEndereço: '+address
                                                                      +'\nTelefone: '+phone
                                                                      +'\nWebSite: '+website
                                                                      +'\nEmpresa: '+company}
      />
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [

       {
            "id": 1,
            "email": "michael.lawson@reqres.in",
            "address": "kulas night",
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": "Romaguera-Crona",      
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 2,
            "email": "lindsay.ferguson@reqres.in",
            "address": "Victor Plains",
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": "Deckow-Crist",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "tobias.funke@reqres.in",
            "address": "Douglas Extension",
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": "Romaguera-Jacobson",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 4,
            "email": "nicholas.fields@reqres.in",
            "address": "Hoeger Mall",
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": "Robel-Corkery",
            "first_name": "Nicholas",
            "last_name": " Runolf V",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "george.edwards@reqres.in",
            "address": "Skiles Walks",
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": "Keebler LLC",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "clementine.howell@reqres.in",
            "address": "kulas night",
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": "Romaguera-Crona",
            "first_name": "Clementine",
            "last_name": "Bauch",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "address": "Rex Trail",
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": "Johns Group",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        },
        {
            "id": 8,
            "email": "patricia.OConner@kory.org",
            "address": "Ellsworth Summit",
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": "Abernathy Group",
            "first_name": "Patricia",
            "last_name": "Lebsack",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 9,
            "email": "ervin.funke@reqres.in",
            "address": "Dayna Park",
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": "Yost and Sons",
            "first_name": "Ervin",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "address": "Kattie Turnpike",
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": "Hoeger LLC",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "victor.edwards@reqres.in",
            "address": "kulas night",
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": "Romaguera-Crona",
            "first_name": "Victor",
            "last_name": "Plains",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "address": "kulas night",
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": "Romaguera-Crona",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ];



//item com uma arrow function
/*const meuItemObj = ({item}) => (
  <View>
      <Text style={styles.paragraph}>{item.title}</Text>
    </View>
)*/



export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    let nomeCompleto = item.first_name + " " + item.last_name
    
    return(
      <Pessoa nome={nomeCompleto} 
              link={item.avatar}
              email={item.email}
              address={item.address}
              phone={item.phone}
              website={item.website}
              company={item.company}
      />
    )
  }
  

  return (

    <View style={styles.container}>
      
      <View><Text style={styles.titulo}>Contatos</Text></View>
      <View>
        <Image 
          style={styles.tinyLogo}
          source={
           {
           uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSskC4tOL4PW6qWZ79uxGsLe4XqpdSHxCr4A&usqp=CAU",
           }
         }
       />    
      </View>

      <FlatList style={{margin:5}}
        numColumns={2}                  // set number of columns 
        columnWrapperStyle={styles.row}
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#E0FFFF',
    padding: 8,    
  },
  paragraph: {
    margin: 6,
    marginTop: 10,
    padding: 3,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#F4A460',    
    borderRadius: 15,
    minWidth: 180, 
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFE4B5",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F4A460'
  }
});
