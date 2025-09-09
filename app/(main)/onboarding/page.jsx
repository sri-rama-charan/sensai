import React from 'react'
import OnboardingForm from '@/components/onboarding-form'
import { industries } from '@/data/industries'


const OnboardingPage = () => {
  //check if user onboarded
  return (
    <main>
      <OnboardingForm industries = {industries}  /> 
    </main>
  )
}

export default OnboardingPage
