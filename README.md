# Roulette API Server

Author: sryvcr

## Installation

1. Ensure that PostgreSQL is installed and configured correctly.
2. `git clone https://github.com/sryvcr/betting_roulette.git`
3. Enter into project directory via terminal and type `$ npm i` to install npm dependency.

## Starting the server

Note: Before starting the api server remember to create database `roulettes_svc` and upload postgresql structure dump that is in 
`docs/databases/postgres/db_structure.sql`,

1. To start the server via terminal type:  
`$ chmod +x debug.sh`  
`$ ./debug.sh`  
2. When the server is running successfully  
`🆗 express application running on port 3000`  
`🆗 connect to db: roulettes_svc, mode: development`

## API Usage

The server uses JSON data for all requests and responses.

### Request: GET /v1/roulettes/get-all

Show all roulettes and its status.

Response:
```javascript
{
    "result": {
        "items": [
            {
                "id": "3",
                "roulette_status_id": "2",
                "roulette_status": "closed"
            },
            {
                "id": "2",
                "roulette_status_id": "2",
                "roulette_status": "closed"
            },
            {
                "id": "1",
                "roulette_status_id": "1",
                "roulette_status": "open"
            }
        ],
        "total": 3
    },
    "status": 200
}
```

### Request: POST /v1/roulettes/create-one

Create new roulette with `roulette_status_id = 0`.

Response:
```javascript
{
    "result": {
        "id": "21"
    },
    "status": 200
}
```

### Request: POST /v1/roulettes/:id/open

Open a roulette to starts bets.
The roulette id must be in path variable

Response:
```javascript
{
    "result": "roulette open correctly",
    "status": 200
}
```

### Request: POST /v1/roulettes/create-bet

Create new bet in a open roulette.
`user_id` must be in headers

Body:
```javascript
{
    "number": 12,
    "color": "black",
    "money": 10000,
    "roulette_id": 21
}
```

Response:
```javascript
{
    {
    "result": {
        "id": "16",
        "number": 12,
        "color": "black",
        "money": 10000,
        "user_id": "4",
        "roulette_id": "21"
    },
    "status": 200
}
}
```

### Request: POST /v1/roulettes/:id/close

Close a roulette that had been started.
The roulette id must be in path variable

Response:
```javascript
{
    "result": [
        {
            "bet_id": "16",
            "number": 12,
            "color": "black",
            "money": 10000,
            "user_id": "4"
        },
        {
            "bet_id": "17",
            "number": 11,
            "color": "red",
            "money": 5000,
            "user_id": "4"
        },
        {
            "bet_id": "18",
            "number": 24,
            "color": "null",
            "money": 5000,
            "user_id": "4"
        },
        {
            "bet_id": "19",
            "number": null,
            "color": "black",
            "money": 8000,
            "user_id": "4"
        }
    ],
    "status": 200
}
```