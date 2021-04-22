import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';




import colors from '../styles/colors';
import {Header} from '../components/Header'
import fonts from '../styles/fonts';
import { EnvironmentButton } from '../components/EnvironmentButton';
import api from '../services/api';
import { PlantCardPrimary } from '../components/PlantCardPrimary';

interface EnvironmentProps{
  key:string,
  title:string
}

interface PlantsProps{
  id: string;
  name: string;
  about:string;
  water_tips: string;
  photo:string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function PlantSelect() {
  const [environments, setEnvironment] = useState<EnvironmentProps[]>([]); //significa que é uma coleção vinda do environmentProps
  const [plants, setPlants] = useState<PlantsProps[]>([]);


  useEffect(() => {
    async function fetchEnvironments() {
      const {data} = await api.
      get('plants_environments?_sort=title&asc');
      setEnvironment([
        {
          key:'all',
          title:'Todos',
        },
        ...data
      ])
    }
    fetchEnvironments();
  },[])


  useEffect(() => {
    async function fetchPlants() {
      const {data} = await api.get('plants');
      setPlants(data)
    }
    fetchPlants();
  },[])

  return(
    <View style={styles.container}>
      <View style={styles.header}>
      <Header/>

      <Text style={styles.title}>
        Em qual ambiente
      </Text>
      <Text style={styles.subtitle}>
        você quer colocar sua planta?
      </Text>
    </View>
      <View>
        <FlatList
          data={environments}
          renderItem={({item})=>(
            <EnvironmentButton title={item.title}/>
          )}
          horizontal
          showsHorizontalScrollIndicator={false} //desabilita efeito de barra de scroll
          contentContainerStyle={styles.environmentList}
        />
      </View>

      <View style={styles.plants}>
          <FlatList
            data={plants}
            renderItem={({item})=>(
              <PlantCardPrimary data={item}/>
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            
          />
      </View>
  
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal:30
  },
  title:{
    fontSize:17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight:20,
    marginTop:15
  },
  subtitle: {
    fontSize:17,
    fontFamily: fonts.text,
    lineHeight:20,
    color: colors.heading
  },
  environmentList: {
    height:40,
    justifyContent: "center",
    paddingBottom:5,
    marginLeft:32,
    marginVertical:32
  },
  plants:{
    flex:1,
    paddingHorizontal:32,
    justifyContent: "center"
  }
})
