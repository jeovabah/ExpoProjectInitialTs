import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  ButtonRedefinePassword,
  ButtonRedefinePasswordText,
  ButtonRegister,
  ButtonRegisterText,
  ButtonRegisterTextGrif,
  Container,
  Content,
  ContentActions,
  ContentButton,
  ContentImage,
  ContentOrSocial,
  ContentSocial,
  ContentTermsOfUse,
  Logo,
  OrSocialText,
  OrSocialTrace,
  TermsOfUseButton,
  TermsOfUseText,
} from './styles'
import { InputContainer } from '~components/InputContainer'
import { Input } from '~components/Input2'
import { InputPassword } from '~components/InputPassword'
import { Button } from '~components'
import { If } from '~components/If'
import { schema } from './schema'
import { useAuth } from '~hooks'
import logoImage from '../../../assets/icon.png'
import { IfLoaderInsideScreen } from '~components/IfLoaderInsideScreen'

interface FormData {
  email: string
  password: string
}

export default function Login() {
  const [modalTerms, setModalTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const handleAuth = useCallback(
    async (form: FormData) => {
      setLoading(true)
      const { email, password } = form
      await signIn(email, password)
      setLoading(false)
    },
    [signIn]
  )
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const handleSignUp = useCallback(() => {}, [])

  const handleRecoveryPassword = useCallback(() => {}, [])

  return (
    <>
      <Container>
        <Content>
          <ContentImage>
            <Logo source={logoImage} />
          </ContentImage>

          <InputContainer label={'Insira seu Email'}>
            <Input
              name="email"
              control={control}
              error={errors.email && errors.email.message}
              placeholder={'Email'}
              keyboardType="email-address"
              icon
            />
          </InputContainer>

          <InputContainer label={'Insira sua senha'}>
            <InputPassword
              name="password"
              control={control}
              placeholder={'Senha'}
              error={errors.password && errors.password.message}
              icon
              // onSubmitEditing={handleSubmit(handleAuth)}
            />
          </InputContainer>

          <ContentActions>
            <ButtonRedefinePassword activeOpacity={0.8} onPress={() => handleRecoveryPassword()}>
              <ButtonRedefinePasswordText>Esqueceu sua senha?</ButtonRedefinePasswordText>
            </ButtonRedefinePassword>
          </ContentActions>

          <ContentButton>
            <IfLoaderInsideScreen loading={loading}>
              <Button title={'Entrar'} onPress={handleSubmit(handleAuth)} />
            </IfLoaderInsideScreen>
          </ContentButton>

          <If condition>
            <ContentOrSocial>
              <OrSocialTrace />
              <OrSocialText>
                {''} Entrar com login social {''}
              </OrSocialText>
              <OrSocialTrace />
            </ContentOrSocial>
          </If>

          <ButtonRegister activeOpacity={0.5} onPress={() => handleSignUp()}>
            <ButtonRegisterText>Não tem conta?</ButtonRegisterText>
            <ButtonRegisterTextGrif>Registre-se agora!</ButtonRegisterTextGrif>
          </ButtonRegister>

          <ContentTermsOfUse>
            <TermsOfUseButton activeOpacity={0.7} onPress={() => setModalTerms(true)}>
              <TermsOfUseText>Termos de Uso</TermsOfUseText>
            </TermsOfUseButton>
          </ContentTermsOfUse>
        </Content>
        {/* <Preload visible={loading} /> */}
      </Container>
      {/* <TermsOfUseModal visible={modalTerms} setVisible={setModalTerms} /> */}
    </>
  )
}
