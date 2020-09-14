import React from "react";
import "./homepage.css";
import { useQuery, gql } from "@apollo/client";
import { Card } from "react-bootstrap";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function homePageComponent() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="container mt-5">
     
      <div className="row">
        <div className="col-md-6">
        <h3 className="text-center" >List of Data</h3>
        {getdatalist(data)}
        </div>
      </div>
    </div>
  );
}

function getdatalist(data) {
  return data.rates.map(({ currency, rate }) => (
    <Card className="pl-4">
    <p key={currency}>
      {currency}: {rate}
    </p>
    </Card>
  ));
}

export default homePageComponent;
