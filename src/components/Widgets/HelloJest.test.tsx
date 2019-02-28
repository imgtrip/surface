import * as React from 'react'
import {shallow} from 'enzyme'

import  HelloJest from './HelloJest'

describe('Component', () => {
  describe('HelloJest', () => {
    it('should render without throwing an error', function () {
      expect(shallow(<HelloJest/>).contains(<p>Hello Jest!</p>)).toEqual(true)
    })
  })
})