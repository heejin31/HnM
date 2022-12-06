/*
	검색기능 추가
	useSearchParams  - 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정하는 데 사용
	
	주소뒤에 /?q=파라매터 
*/

import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩 css
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productsList, setProductsList] = useState([]);
  let [query, setQuery] = useSearchParams(); //주소 뒤 파라매터

  const getProducts = async () => {
    let keyword = query.get("q") || ""; //쿼리값을 읽어온다 q의 밸류(아이템을 가져온다)/ 없을땐 빈 스트링(비어있는값)
    let url = `https://my-json-server.typicode.com/heejin31/HnM/products?q=${keyword}`;
    let response = await fetch(url); //브라우저는 네트워크에 요청을 보내고 프로미스객체가 반환
    let data = await response.json();
    setProductsList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]); //키워드를 입력했을때마다 getProduct 함수가 실행되게

  return (
    <div>
      <Container>
        <Row>
          {productsList.map((menu) => (
            <Col sm={6} lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;

// https://www.npmjs.com/package/json-server
// $ npm install -g json-server
// $ json-server --watch db.json --port 5000
