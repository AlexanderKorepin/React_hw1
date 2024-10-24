function CurrentTime() {
  return ( 
    <div>
      <p>Текущая дата и время: {new Date().toLocaleString()}</p>
    </div>
   );
}

export default CurrentTime;