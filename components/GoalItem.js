import { StyleSheet, View, Text, Pressable } from "react-native"

function GoalItem({itemData, onDeleteItem, id}){

function deleteGoalHandler(){
  onDeleteItem(id)
  console.log('Delete Goal handler')
}

    return(
      <Pressable onPress={DeleteGoalHandler}>
        <View style={styles.goalsItem} >
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
      </Pressable>
    )
}

export default GoalItem