import React from 'react'
import styled from 'styled-components'

import Tab from './tab'
import { device } from '../../styles/breakpoints'

const TabsWrapper = styled.div`
  .tab-list {
    padding: 0;
    text-align: center;
    .tab-list-item {
      display: inline-block;
      list-style: none;
      padding: 12px 35px;
      cursor: pointer;
      color: var(--oxford-blue);
      transition: color 0.3s ease;
      transition: background 0.3s ease;
      border: 1px solid var(--oxford-blue);
      width: 100%;
      margin-right: 2px;
      &:hover{
        color: white;
        background-color: var(--oxford-blue);
      }
      &:first-child{
        margin-bottom: -1px;
      }
      &:last-child{
        margin-top: -1px;
      }
      @media ${device.tablet}{
        width: auto;
        &:first-child{
          margin-bottom: -1px;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        &:last-child{
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          margin-right: 0;
        }
      }
    }
    .tab-list-active {
      color: white;
      background-color: var(--oxford-blue);
      &:hover{
        color: white;
      }
    }
  }
  .tab-content{
    padding: 50px 0;
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