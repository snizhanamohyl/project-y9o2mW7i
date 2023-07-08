import React from "react"
import { Greetings } from 'components/Greetings/Greetings';
import { AuthNav } from 'components/AuthNav/AuthNav';

export default function WelcomePage() {
    return (
      <>
            <Greetings />
            <AuthNav/>
      </>
    );
}