import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

export default function GetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.openbrewerydb.org/breweries").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div class="getData">
      <Container>
        <div class="table">
          <Table striped bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Brewery Type</th>
                <th>Location</th>
                <th>Longitude</th>
                <th>Latitude</th>
                <th>Phone</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.brewery_type}</td>
                  <td>
                    {data.street} {data.address_2} {data.address_3} {data.city}{" "}
                    {data.state} {data.county_province}, {data.postal_code}, {" "}
                    {data.country}
                  </td>
                  <td>{data.longitude}</td>
                  <td>{data.latitude}</td>
                  <td>{data.phone}</td>
                  <td>{data.website_url}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}
