import { useState } from 'react'
import './App.css'
import Header from '../components/header'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='main-container'>
        <Card
          link="https://www.espn.com.co/futbol/numeritos/_/juegoId/704970"
          date="19/04/2025"
          team="Celta de Vigo"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCRY3XzSCWx6jtLhCdMT8aQuynx2hBJG6Cg&s"
        />
        <Card
          link="https://www.espn.com.co/futbol/numeritos/_/juegoId/704988"
          date="22/04/2025"
          team="R.C.D. Mallorca"
          image="https://image-service.onefootball.com/transform?w=128&dpr=2&image=https://images.onefootball.com/icons/teams/164/220.png"
        />
        <Card
          link="https://www.espn.com.co/futbol/numeritos/_/juegoId/735156"
          date="26/04/2025"
          team="Real Madrid (Copa del Rey Final)"
          image="https://fundacionjrdelamorena.es/wp-content/uploads/2015/05/real_madrid.png"
        />
        <Card
          link="https://www.espn.com.co/futbol/numeritos/_/juegoId/733617"
          date="30/04/2025"
          team="Inter Milan (UCL Semi‑Final 1st Leg)"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/800px-FC_Internazionale_Milano_2021.svg.png"
        />
        <Card
          link="https://www.espn.com.co/futbol/numeritos/_/juegoId/704996"
          date="03/05/2025"
          team="Real Valladolid"
          image="https://i.pinimg.com/474x/7f/c9/b4/7fc9b4d9a8e6170564fcdd7dae8107c5.jpg"
        />
        <Card
          link="https://www.espn.com.co/futbol/numeritos/_/juegoId/733619"
          date="06/05/2025"
          team="Inter Milan (UCL Semi‑Final 2nd Leg)"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/800px-FC_Internazionale_Milano_2021.svg.png"
        />
        <Card
          link="https://www.espn.com.co/futbol/numeritos/_/juegoId/705002"
          date="11/05/2025"
          team="Real Madrid"
          image="https://fundacionjrdelamorena.es/wp-content/uploads/2015/05/real_madrid.png"
        />
        <Card
          link="https://www.espn.com.co/futbol/numeritos/_/juegoId/705018"
          date="15/05/2025"
          team="Espanyol"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwPGnWjeHPtaX6xISCjqBMMu9H6m034hzew&s"
        />
        <Card
          link="https://www.espn.com.co/futbol/numeritos/_/juegoId/705021"
          date="18/05/2025"
          team="Villarreal"
          image="https://upload.wikimedia.org/wikipedia/tr/f/fc/Villarreal_CF_logo.png"
        />
        <Card
          link="https://www.espn.com.co/futbol/numeritos/_/juegoId/705035"
          date="25/05/2025"
          team="Athletic Bilbao"
          image="https://cambodianfootball.com/upload/catalog/c/1174/s_athletic-bilbao-football-club.png"
        />
      </div>
    </>
  )
}

export default App
