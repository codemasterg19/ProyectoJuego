import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Card } from '../model/Card'
import { observer } from 'mobx-react-lite'

interface CardViewProps {
  card: Card
  cardSize: number
  gapSize: number
}

export const CardView = observer(
  ({ card, cardSize, gapSize }: CardViewProps) => {
    return (
      <Pressable
        style={[
          styles.container,
          { width: cardSize, height: cardSize, margin: gapSize },
        ]}
        onPress={() => {
          card.makeVisible()
        }}>
        <View>
          <Text>{card.type}</Text>
          <Text>isVisible: {card.isVisible.toString()}</Text>
        </View>
      </Pressable>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderWidth: 3,
    borderRadius: 8,
    borderColor: 'blue',
    padding: 10,
  },
})
