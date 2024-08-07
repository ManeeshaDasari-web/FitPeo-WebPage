import React from 'react'

const OrdersTable = () => {
    const orders = [
        { id: 1, name: "Wade Warren", orderNo: "15478256", amount: "$124.00", status: "Delivered", statusColor: "#105647", img: "../../public/Capture.PNG" },
        { id: 2, name: "Jane Cooper", orderNo: "48965786", amount: "$365.00", status: "Delivered", statusColor: "#105647", img: "../../public/Capture.PNG" },
        { id: 3, name: "Guy Hawkins", orderNo: "78958215", amount: "$45.00", status: "Cancelled", statusColor: "#5C353A", img: "../../public/Capture.PNG" },
      ];
      
  return (
    <table>
    <thead>
      <tr>
        <td>Customer</td>
        <td>Order No.</td>
        <td>Amount</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.id}>
          <td>
            <div className='imagecell'>
              <img src={order.img} alt={order.name} />
              <p>{order.name}</p>
            </div>
          </td>
          <td>{order.orderNo}</td>
          <td>{order.amount}</td>
          <td>
            <div className={order.status.toLowerCase()} style={{ backgroundColor: order.statusColor }}>
              <p>{order.status}</p>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default OrdersTable