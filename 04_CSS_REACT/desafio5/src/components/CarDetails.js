import styles from './CarDetails.module.css'

const CarDetails = ({ marca, modelo, cor }) => {
  return (
    <div>

        
        <p className={styles.car_details}>DETALHES DO CARRO</p>
        <p className={styles.car_details}>Marca: {marca} </p>
        <p className={styles.car_details}>Modelo: {modelo}</p>
        <p className={styles.car_details}>Cor: {cor}</p>
        <hr></hr>
      
    </div>
  )
}

export default CarDetails
