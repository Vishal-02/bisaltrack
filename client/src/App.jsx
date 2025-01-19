import {Section} from './components/Section'
import {Text} from './components/Text'
import {Card, CardContent, CardHeader} from './components/Card'
import {Input} from './components/Input'
import {Button} from './components/Button'

export default function App() {
  return (
    <Section className='bg-slate-950 min-h-screen'>
      <Text variant="h1" className="mb-8 text-white">Bisal Expense Tracker</Text>
      
      <Card className="max-w-md bg-slate-900 border-slate-800">
        <CardHeader>
          <Text variant="h3" className='text-white'>Add An Account</Text>
          <Text variant="small" className="text-slate-400">Enter your account information</Text>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Text variant="small" className="mb-2">Account Name</Text>
              <Input type="text" placeholder="Enter your account name" />
            </div>
            <div>
              <Text variant="small" className="mb-2">Account Type</Text>
              <Input type="text" placeholder="Choose account type" />
            </div>
            <Button className="w-full">Add Account</Button>
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}