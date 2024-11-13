import { InternalRuleItem } from 'async-validator'

export const requiredValidator = (
  _rule: InternalRuleItem,
  value: unknown,
  cb: (error?: string | Error) => void
) => {
  if (gbUtil.isEmpty(value)) {
    cb(new Error(gbLocale.t('global.message.requiredTip')))
    return
  }
  cb()
}

export const requiredMultiValidator = (
  _rule: InternalRuleItem,
  value: unknown,
  cb: (error?: string | Error) => void
) => {
  if (gbUtil.isArray(value) && value.length > 0) {
    cb()
    return
  }
  cb(new Error(gbLocale.t('global.message.requiredTip')))
}

export const requiredRules = (trigger: 'blur' | 'change' = 'blur') => [
  {
    validator: requiredValidator,
    trigger
  }
]

export const requiredMultiRules = (trigger: 'blur' | 'change' = 'change') => [
  {
    validator: requiredMultiValidator,
    trigger
  }
]
