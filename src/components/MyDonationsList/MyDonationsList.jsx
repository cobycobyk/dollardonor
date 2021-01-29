export default function MyDonationsList({ orders }) {
  // const orderItems = orders.map(order => 
    
  //   )
  return (
    <div className="col-md-8">
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            name
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">
           email
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">State</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            state
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Zipcode</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            cip
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}