import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const singUpFrom = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SingUpForm = z.infer<typeof singUpFrom>

export function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingUpForm>()
  const navigate = useNavigate()

  function handleSingUp(data: SingUpForm) {
    try {
      console.log(data)

      toast.success('Restaurante cadastrado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sing-in'),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante,')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="outline" asChild className=" absolute right-8 top-8">
          <Link to="/sing-in">Fazer Login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Cadastrar</h1>
            <p className="text-sm text-muted-foreground">
              Cadastre uma nova loja e começe suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSingUp)} className="space-y-4">
            <div className="space-y-2">
              <Label>Nome do Estabelecimento</Label>
              <Input
                id="restaurantName"
                className="w-full"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label>Seu e-mail</Label>
              <Input id="email" className="w-full" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label>Seu Nome</Label>
              <Input
                id="managerName"
                className="w-full"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label>Seu telefone</Label>
              <Input id="phone" className="w-full" {...register('phone')} />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Acessar painel
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="" className="underline underline-offset-4">
                Termos de serviços
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
