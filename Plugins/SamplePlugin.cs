using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FixRM.Plugins
{
    [CrmPluginRegistration(
        message: "sample",
        entityLogicalName: null,
        stage: StageEnum.PostOperation,
        executionMode: ExecutionModeEnum.Synchronous,
        filteringAttributes: null,
        stepName: "FixRM.Plugins.SamplePlugin",
        executionOrder: 10,
        isolationModel: IsolationModeEnum.Sandbox)]
    public class SamplePlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            throw new NotImplementedException();
        }
    }
}