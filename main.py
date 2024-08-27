from datetime import datetime
from enum import Enum
from typing import List, Optional
from fastapi import FastAPI
from pydantic import BaseModel, Field # type: ignore

app = FastAPI(
    title='Telebook v.3.0'
)

fake_users = [
    {'id':1 , 'role': 'Admin', 'name': 'Madi'},
    {'id':2 , 'role': 'NeAdmin', 'name': 'Kuka'},
    {'id':3 , 'role': 'user', 'name': 'Bob'},
    {'id':4 , 'role': 'user', 'name': 'Mary', 
     'degree':[
        {'id':1, 'created_at':'2020-01-01T00:00:00','type_degree': 'expert'}]
    },  
]

class DegreeType(Enum):
    newbie = 'newbie'
    expert = 'expert'

class Degree(BaseModel):
    id: int
    created_at: datetime
    type_degree: DegreeType

class User(BaseModel):
    id: int
    role: str
    name: str
    degree: Optional[List[Degree]] = []

@app.get('/users/{user_id}', response_model=List[User])
def get_user(user_id:int):
    return [user for user in fake_users if user.get('id') == user_id]

fake_trades = [
    {'id':1, 'user_id': 1, 'cost': 123, 'currency':'BTC'},
    {'id':2, 'user_id': 1, 'cost': 456, 'currency':'BTC'},
    {'id':1, 'user_id': 2, 'cost': 789, 'currency':'BTC'}, 
]


@app.get('/trades')
def get_trades(limit: int = 1, offset: int = 0):
    return fake_trades[offset:][:limit]

fake_users2 = [
    {'id':1 , 'role': 'Admin', 'name': 'Madi'},
    {'id':2 , 'role': 'NeAdmin', 'name': 'Kuka'},
    {'id':3 , 'role': 'user', 'name': 'Bob'}, 
]

@app.post('/users/{user_id}')
def change_user_name(user_id:int, new_name:str):
    current_user = list(filter(lambda user: user.get('id') == user_id, fake_users2))[0]
    print(current_user)
    current_user['name'] = new_name
    return {'status': 200, 'data': current_user}

class Trade(BaseModel):
    id: int
    user_id: int
    cost: float = Field(ge=0)
    currency: str = Field(max_length=5)

@app.post('/trades')
def add_trades(new_trades: List[Trade]):
    fake_trades.extend(new_trades)
    return {'status':200, 'data':fake_trades}
    pass