import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
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

interface FormData extends TextInputMask {
  email: string
  password: string
}

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [modalTerms, setModalTerms] = useState(false)
  const [driverSelected, setDriverSelected] = useState(false)
  const navigation = useNavigation()

  const handleAuth = useCallback(() => {}, [])

  const handleSignUp = useCallback(() => {}, [])

  const handleRecoveryPassword = useCallback(() => {}, [])

  return (
    <>
      <Container>
        <If condition={verifyDelivery}>
          <BackPage onPress={() => navigation.goBack()} text={''} />
        </If>
        <Content>
          <ContentImage>
            <Logo source={logo} />
          </ContentImage>

          <InputContainer label={translate('login.label_email')}>
            <Input
              name="email"
              control={control}
              error={errors.email && errors.email.message}
              placeholder={translate('login.text_placeholder_email')}
              keyboardType="email-address"
              icon
            />
          </InputContainer>

          <InputContainer label={translate('login.label_password')}>
            <InputPassword
              name="password"
              control={control}
              placeholder={translate('login.text_placeholder_password')}
              error={errors.password && errors.password.message}
              icon
              onSubmitEditing={handleSubmit(handleAuth)}
            />
          </InputContainer>

          <ContentActions>
            <CheckBoxCircle
              title="Sou Parceiro"
              checked={driverSelected}
              onCheck={() => setDriverSelected(!driverSelected)}
            />

            <ButtonRedefinePassword activeOpacity={0.8} onPress={() => handleRecoveryPassword()}>
              <ButtonRedefinePasswordText>
                {translate('recoveryPassword.title')}
              </ButtonRedefinePasswordText>
            </ButtonRedefinePassword>
          </ContentActions>

          <ContentButton>
            <Button title={translate('login.text_login')} onPress={handleSubmit(handleAuth)} />
          </ContentButton>

          <If condition>
            <ContentOrSocial>
              <OrSocialTrace />
              <OrSocialText>
                {''} {translate('login.init_ssesion_social')} {''}
              </OrSocialText>
              <OrSocialTrace />
            </ContentOrSocial>

            <ContentSocial>
              <Accessory onPress={() => {}}>
                <IconGoogle height={RFValue(31)} width={RFValue(31)} />
              </Accessory>

              <Accessory onPress={() => {}}>
                <IconFacebook height={RFValue(31)} width={RFValue(31)} />
              </Accessory>

              <Accessory onPress={() => {}}>
                <IconApple height={RFValue(31)} width={RFValue(31)} />
              </Accessory>
            </ContentSocial>
          </If>

          <ButtonRegister activeOpacity={0.5} onPress={() => handleSignUp()}>
            <ButtonRegisterText>{translate('login.not_account')}</ButtonRegisterText>
            <ButtonRegisterTextGrif>{translate('login.text_register')}</ButtonRegisterTextGrif>
          </ButtonRegister>

          <ContentTermsOfUse>
            <TermsOfUseButton activeOpacity={0.7} onPress={() => setModalTerms(true)}>
              <TermsOfUseText>Termos de Uso</TermsOfUseText>
            </TermsOfUseButton>
          </ContentTermsOfUse>
        </Content>
        <Preload visible={loading} />
      </Container>
      <TermsOfUseModal visible={modalTerms} setVisible={setModalTerms} />
    </>
  )
}
