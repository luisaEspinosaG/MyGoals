import { useState } from 'react';
import {StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './assets/components/Goallinput';
import GoalItem from './assets/components/Goallitem';

export default function App() {
  const [goals, setGoals] = useState([])

function handleAddGoal(enteredGoalText){
  setGoals(() => [...goals, {text: setEnteredGoalText}])
}
function hanleDeleteGoal(enteredGoalText){
  console.log("DELETE")
}



  return (
    <View style={styles.container}>
      <GoalInput
      onAddGoal={handleAddGoal}
      />
      <View style={styles.GoalContainer}>
  <FlatList
  data={goals}
  renderItem={(itemData) => {
    <GoalItem
    itemData={itemData}
    OnDeleteItem={hanleDeleteGoal}
    />
   }}
   keyExtractor={(item) => {
    return item.id
   }}
/>
</View>
</View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal: 20
  },
  inputcontainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FE',
  },
btnGoal:{
  borderRadius: 20,
  backgroundColor: '#cccccc',
},
textInput:{
  borderWidth: 1,
  borderColor: '#cccccc',
  width:'80%',
  marginRight: 3,
  padding: 8,
  borderRadius: 5,
},
goalsItem: {
  margin:8,
  padding: 8,
  borderRadius: 6,
  backgroundColor: '#8576FF',
  color: 'white'
},
goalText: {
  color: 'white'
}
})