import React from 'react'
import Layout from '../components/layout/Layout'
import SettingsPage from '../components/settings/SettingsPage'
import { SettingsProvider } from '@/contexts/SettingsContext'

function Settings() {
  return (
    <Layout>
        
        
      <SettingsProvider>
            <SettingsPage/>
        </SettingsProvider>
    </Layout>
  )
}
export default Settings