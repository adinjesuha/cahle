import React from 'react'
import styled from 'styled-components'

import Tab from './tab'
import { device } from '../../styles/breakpoints'

const TabsWrapper = styled.div`
  .tab-list {
    padding-left: 0;
    text-align: center;
    background: var(--anti-flash-white);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    .tab-list-item {
      display: inline-block;
      list-style: none;
      padding: 20px 40px;
      cursor: pointer;
      color: var(--ceil);
      transition: color 0.3s ease;
      width: 100%;
      &:hover{
        color: var(--active);
      }
      @media ${device.tablet}{
        width: auto;
      }
    }
    .tab-list-active {
      color: var(--active);
      border-bottom: 2px solid var(--active);
      &:hover{
        color: var(--active);
      }
    }
  }
  .tab-content{
    padding: 40px 20px 60px;
    background: white;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

class Tabs extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      activeTab: this.props.children[0].props.label
    }
  }
  onClickTabItem = (tab) => {
    this.setState({
      activeTab: tab
    })
  }
  render(){
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this
    return (
      <TabsWrapper>
        <ul className="tab-list">
          {children.map(child => {
            const { label } = child.props;
            return (
              <Tab 
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            )
          })}
        </ul>
        <div className="tab-content">
          {children.map(child => {
            if(child.props.label !== activeTab) return undefined
            return child.props.children
          })}
        </div>
      </TabsWrapper>
    )
  }
}

export default Tabs;