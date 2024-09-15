// src/hooks/useActions.js
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import rootActions from '../store/rootActions.js'

export const useActions = () => {
  const dispatch = useDispatch()
  
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
};
