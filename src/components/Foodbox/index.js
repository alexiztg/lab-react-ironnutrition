import React from 'react'
import { Button, Card, Col} from 'antd'

const FoodBox = (props) => {
    const {name, calories, image, servings, deleteFood, index}= props
  return (
    <Col>
        <Card style={{width:230}} title={name}> 
            <img src={image} width={100} alt="picFood"/>
            <p>Calories: {calories}</p>
            <p>Servings {servings}</p>
            <p><strong>Total Calories {calories * servings}</strong></p>
            <Button type='primary' onClick={()=>deleteFood(index)}>Delete</Button>
        </Card>
    </Col>    
  )
}

export default FoodBox