import {Text} from './components/Text'
import {Card, CardContent, CardHeader} from './components/Card'
import {Input} from './components/Input'
import {Button} from './components/Button'
import {Select} from './components/Select'
import { CurrencyInput } from './components/CurrencyInput'
import { Form } from './components/Form'
import {Section} from './components/Section'


export default function App() {


  const handleSubmit = () => {

  }

  return (
    <Section className='bg-slate-950 min-h-screen'>
      <Card className="max-w-md bg-slate-900 border-slate-800">
        <CardHeader>
          <Text variant="h3" className="text-white">Add An Account</Text>
          <Text variant="small" className="text-slate-400">
            Enter your account information
          </Text>
        </CardHeader>
        <CardContent>
          <Form.Root onSubmit={handleSubmit}>
            <Form.Field>
              <Form.Label>Account Name</Form.Label>
              <Input
                name="accountName"
                type="text"
                placeholder="Enter your account name"
                required
                minLength={2}
              />
              <Form.Message />
            </Form.Field>

            <Form.Field>
              <Form.Label>Account Type</Form.Label>
              <Select
                name="accountType"
                required
              >
                <option value="">Select account type</option>
                <option value="checking">Checking</option>
                <option value="savings">Savings</option>
              </Select>
              <Form.Message />
            </Form.Field>

            <Form.Field>
              <Form.Label>Account Balance</Form.Label>
              <CurrencyInput
                name="balance"
                placeholder="Enter your account balance"
                required
                min={0}
              />
              <Form.Message />
            </Form.Field>

            <Button type="submit" className="w-full mt-6">
              Add Account
            </Button>
          </Form.Root>
        </CardContent>
      </Card>
    </Section>
    
  );
}