import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import AdminBoardComponent from './AdminBoardComponent'
import AdminReviewComponent from './AdminReviewComponent'
import AdminPaymentComponent from './AdminPaymentComponent'
import AdminMemberComponent from './AdminMemberComponent'
import AdminTrackingComponent from './AdminTrackingComponent'
import { adminAccount } from "../../adminEnv";

const AdminComponent = () => {

  const [key, setKey] = useState('board')
const [member, setMember] = useState(() => {
    const storedMember = localStorage.getItem('member');
    return storedMember ? JSON.parse(storedMember) : null;
  });

  useEffect(() => {
      const storedMember = localStorage.getItem("member");
      if (storedMember) {
        const parsedMember = JSON.parse(storedMember);
        setMember(parsedMember);
      }
    console.log("멤버?",member);
    }, [])

  return (
    <>
      <Container>
        <Row>
            <Tabs activeKey={key} onSelect={(k) => setKey(k)} id="uncontrolled-tab-example" className="mb-3" >
                  <Tab eventKey="board" title="공지사항/FAQ 관리"><AdminBoardComponent /></Tab>
                  {/* <Tab eventKey="qna" title="Q&A"><AdminQnAComponent /></Tab> */}
                  <Tab eventKey="review" title="리뷰"><AdminReviewComponent /></Tab>
                  <Tab eventKey="payment" title="결제"><AdminPaymentComponent /></Tab>
                  <Tab eventKey="delivery" title="배송"><AdminTrackingComponent /></Tab>
                  <Tab eventKey="member" title="회원"><AdminMemberComponent /></Tab>
            </Tabs>
        </Row>
      </Container>
    </>
  )
}

export default AdminComponent
