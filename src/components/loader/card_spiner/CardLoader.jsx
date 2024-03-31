
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Col, Row } from 'react-bootstrap'
export const CardLoader = () => {
    return (
        <SkeletonTheme baseColor="#f703ff" highlightColor="#ffffff74" direction='rtl'>
            <p>
                <div>
                    <Row>
                        <Col lg='3'>
                            <Skeleton duration={2} count={1} height={250} borderRadius={10} />
                            <div className='py-1'></div>
                            <Skeleton duration={2} count={3} />
                        </Col>
                        <Col lg='3'>
                            <Skeleton duration={2} count={1} height={250} borderRadius={10} />
                            <div className='py-1'></div>
                            <Skeleton duration={2} count={3} />
                        </Col>
                        <Col lg='3'>
                            <Skeleton duration={2} count={1} height={250} borderRadius={10} />
                            <div className='py-1'></div>
                            <Skeleton duration={2} count={3} />
                        </Col>
                        <Col lg='3'>
                            <Skeleton duration={2} count={1} height={250} borderRadius={10} />
                            <div className='py-1'></div>
                            <Skeleton duration={2} count={3} />
                        </Col>
                    </Row>


                    {/* <Skeleton count={8} /> */}
                </div>
            </p>
        </SkeletonTheme>
    )
}
