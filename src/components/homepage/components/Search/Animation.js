import React from 'react';
import './Animation.scss';

const Animation = () => {
  return (
    <div>
     <div className="scene">
    <div className="book-wrap">
      <div className="left-side">
        <div className="book-cover-left"></div>
        <div className="layer1">
          <div className="page-left"></div>
        </div>
        <div className="layer2">
          <div className="page-left"></div>
        </div>
        <div className="layer3">
          <div className="page-left"></div>
        </div>
        <div className="layer4">
          <div className="page-left"></div>
        </div>
        <div className="layer-text">
          <div className="page-left-2">
            <div className="corner"></div>
            <div className="corner2"></div>
            <div className="corner-fold"></div>
            <div className="page-text w-richtext">
              <h3><strong>Gujarat</strong></h3>
              {/* <h6>BY <a href="https://www.poetryfoundation.org/poets/walt-whitman" target="_blank">WALT WHITMAN</a></h6> */}
              <p>‍</p>
              <p>Centre of equal daughters, equal sons,</p>
              <p>All, all alike endear’d, grown, ungrown, young or old,</p>
              <p>Strong, ample, fair, enduring, capable, rich,</p>
              <p>Perennial with the Earth, with Freedom, Law and Love,</p>
              <p>A grand, sane, towering, seated Mother,</p>
              <p>Chair’d in the adamant of Time.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="center"></div>
      <div className="right-side">
        <div className="book-cover-right"></div>
        <div className="layer1">
          <div className="page-right"></div>
        </div>
        <div className="layer2 right">
          <div className="page-right"></div>
        </div>
        <div className="layer3 right">
          <div className="page-right"></div>
        </div>
        <div className="layer4 right">
          <div className="page-right"></div>
        </div>
        <div className="layer-text right">
          <div className="page-right-2">
            <div className="page-text w-richtext">
              <h3><strong>Colleges</strong></h3>
              {/* <h6>BY <a href="https://www.poetryfoundation.org/poets/walt-whitman" target="_blank">WALT WHITMAN</a></h6> */}
              <p>‍</p>
              <p>A glimpse through an interstice caught, </p>
              <p>Of a crowd of workmen and drivers in a bar-room around the stove late of a winter night, and I unremark’d seated in a corner, </p>
              <p>‍</p>
              <p>Of a youth who loves me and whom I love, silently approaching and seating himself near, that he may hold me by the hand </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Animation;