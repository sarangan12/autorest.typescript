/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";


export const Animal: coreHttp.CompositeMapper = {
  serializedName: "Animal",
  type: {
    name: "Composite",
    className: "Animal",
    modelProperties: {
      aniType: {
        serializedName: "aniType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Pet: coreHttp.CompositeMapper = {
  serializedName: "Pet",
  type: {
    name: "Composite",
    className: "Pet",
    modelProperties: {
      ...Animal.type.modelProperties,
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BaseError: coreHttp.CompositeMapper = {
  serializedName: "BaseError",
  type: {
    name: "Composite",
    className: "BaseError",
    modelProperties: {
      someBaseProp: {
        serializedName: "someBaseProp",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotFoundErrorBase: coreHttp.CompositeMapper = {
  serializedName: "NotFoundErrorBase",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "whatNotFound",
      clientName: "whatNotFound"
    },
    uberParent: "NotFoundErrorBase",
    className: "NotFoundErrorBase",
    modelProperties: {
      ...BaseError.type.modelProperties,
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      whatNotFound: {
        required: true,
        serializedName: "whatNotFound",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkNotFound: coreHttp.CompositeMapper = {
  serializedName: "InvalidResourceLink",
  type: {
    name: "Composite",
    className: "LinkNotFound",
    modelProperties: {
      ...NotFoundErrorBase.type.modelProperties,
      whatSubAddress: {
        serializedName: "whatSubAddress",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnimalNotFound: coreHttp.CompositeMapper = {
  serializedName: "AnimalNotFound",
  type: {
    name: "Composite",
    className: "AnimalNotFound",
    modelProperties: {
      ...NotFoundErrorBase.type.modelProperties,
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PetAction: coreHttp.CompositeMapper = {
  serializedName: "PetAction",
  type: {
    name: "Composite",
    className: "PetAction",
    modelProperties: {
      actionResponse: {
        serializedName: "actionResponse",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PetActionError: coreHttp.CompositeMapper = {
  serializedName: "PetActionError",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "errorType",
      clientName: "errorType"
    },
    uberParent: "PetActionError",
    className: "PetActionError",
    modelProperties: {
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "String"
        }
      },
      errorType: {
        required: true,
        serializedName: "errorType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PetSadError: coreHttp.CompositeMapper = {
  serializedName: "PetSadError",
  type: {
    name: "Composite",
    polymorphicDiscriminator: PetActionError.type.polymorphicDiscriminator,
    uberParent: "PetActionError",
    className: "PetSadError",
    modelProperties: {
      ...PetActionError.type.modelProperties,
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PetHungryOrThirstyError: coreHttp.CompositeMapper = {
  serializedName: "PetHungryOrThirstyError",
  type: {
    name: "Composite",
    polymorphicDiscriminator: PetActionError.type.polymorphicDiscriminator,
    uberParent: "PetActionError",
    className: "PetHungryOrThirstyError",
    modelProperties: {
      ...PetSadError.type.modelProperties,
      hungryOrThirsty: {
        serializedName: "hungryOrThirsty",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const discriminators = {
  'BaseError.NotFoundErrorBase' : NotFoundErrorBase,
  'BaseError.InvalidResourceLink' : LinkNotFound,
  'BaseError.AnimalNotFound' : AnimalNotFound,
  'PetActionError' : PetActionError,
  'PetActionError.PetSadError' : PetSadError,
  'PetActionError.PetHungryOrThirstyError' : PetHungryOrThirstyError

};